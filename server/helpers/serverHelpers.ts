export const getDataByPage = (
  data: DataT[],
  page: number | QueryValue | QueryValue[],
  pageSize: number
): DataT[] => {
  const startI = (page - 1) * pageSize;

  const endI = page * pageSize;

  const newData = data.slice(startI, endI);

  return newData;
};

export const getTotalPage = (data: DataT[], pageSize: number): number =>
  Math.ceil(data.length / pageSize);

export const PAGESIZE = 20;

type DataT = {
  title: string;
  image: string;
  desc: string;
  type: string;
  endpoint: string;
};

export type ListT = {
  data: DataT[];
};
