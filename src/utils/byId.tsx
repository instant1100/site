const byId = (findId: string) => ({ id }: any) => findId === id;

export default byId;
