
export const errorMessageParser = (errMessage: string) => {
  const [ key, valueNames, valueInterpolations ] = errMessage.split("/");
  let values: Record<string, string> | undefined;

  // biome-ignore lint/suspicious/noConfusingLabels: Block name is explanatory
  valueSplittingBlock: {
    if (!valueNames || !valueInterpolations) {
      break valueSplittingBlock;
    }

    const splitNames = valueNames.split(",");
    const splitInterpolations = valueInterpolations.split(",");
  
    if (splitNames.length !== splitInterpolations.length) {
      break valueSplittingBlock;
    }

    values = {}
    splitNames.forEach((name, index) => {values[name] = splitInterpolations[index]})
  }

  return { key, values }
}