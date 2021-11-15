export async function catchPromise<T>(promise: Promise<T>): Promise<[result: T, error: any]> {
  try {
    const result = await promise;
    return [result, null];
  } catch (error) {
    return [null, error];
  }
}