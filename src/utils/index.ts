export const fakeAuth: () => Promise<string> = () =>
  new Promise((resolve) => setTimeout(() => resolve("mytoken12234"), 250));
