export type OnLoadCallback = (file: string) => void;

export type ImageLoaderProps = {
    setFieldValue: OnLoadCallback,
    name: string,
    oldImage: string,
}
