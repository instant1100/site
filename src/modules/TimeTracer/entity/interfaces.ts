export type Stream = {
    id: string,
    name: string,
    tags: Tag[];
    size: number,
    image: string,
}

export type Word = {
    word: string,
}

export type Tag = {
    name: string,
}

export type Activity = {
    id: string
    value: string,
    streams: Stream[],
    date: number,
}
