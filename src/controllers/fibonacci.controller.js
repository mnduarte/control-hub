const buildFibonacci = (_idx) =>
  new Array(_idx + 1).fill(1).reduce((arr, val, i) => {
    arr.push(i <= 1 ? i : arr[i - 2] + arr[i - 1]);
    return arr;
  }, []);

const errorMapping = {
  MISSING_PARAMS: {
    status: "ERROR",
    errorMessage: "missing index",
  },
  NOT_NUMBER_PARAM: {
    status: "ERROR",
    errorMessage: "is not a number param",
  },
};

exports.getValue = async (req, res) => {
  const { idx } = req.params;
  const { MISSING_PARAMS, NOT_NUMBER_PARAM } = errorMapping;
  if (!idx) {
    return res.status(500).send({
      status: MISSING_PARAMS.status,
      errorMessage: MISSING_PARAMS.errorMessage,
    });
  }

  const numberIdx = parseInt(idx);

  if (!Number.isInteger(numberIdx)) {
    return res.status(500).send({
      status: NOT_NUMBER_PARAM.status,
      errorMessage: NOT_NUMBER_PARAM.errorMessage,
    });
  }

  return res.send({ value: buildFibonacci(numberIdx)[numberIdx] });
};
