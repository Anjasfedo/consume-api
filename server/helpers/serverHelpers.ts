export const getDataByPage = (data, page, pageSize) => {
  const startI = (page - 1) * pageSize;

  const endI = page * pageSize;

  const newData = data.slice(startI, endI);

  return newData;
};

export const getTotalPage = (data, pageSize) => Math.ceil(data.length / pageSize)
