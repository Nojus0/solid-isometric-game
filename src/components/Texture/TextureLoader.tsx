import { Component, createMemo, createSignal, JSX, Show } from "solid-js";

export const gTextures = new Map<string, HTMLImageElement>([]);

interface TextureLoader {
  load: string[];
  whileLoading?: JSX.Element;
  children: any;
  onError?: () => void;
}


const TextureLoader: Component<TextureLoader> = (p) => {
  const [status, setStatus] = createSignal<"Loading" | "Success" | "Failure">(
    "Loading"
  );

  let queue: Promise<void>[] = [];

  for (let texture of p.load) {
    const loaded = gTextures.get(texture);

    if (loaded) continue;

    const promise = new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = texture;
      img.onload = () => {
        gTextures.set(texture, img);
        resolve();
      };
      img.onerror = reject;
    });

    queue.push(promise);
  }

  if (queue.length < 1) {
    setStatus("Success");
  } else {
    Promise.all(queue)
      .then(() => {
        setStatus("Success");
      })
      .catch(() => {
        setStatus("Failure");
        p.onError && p.onError();
      });
  }

  return createMemo(() => {
    const state = status();

    switch (state) {
      case "Success":
        return p.children;
      case "Loading":
        return p.whileLoading;
      case "Failure":
        return null;
    }
  });
};

export default TextureLoader;
