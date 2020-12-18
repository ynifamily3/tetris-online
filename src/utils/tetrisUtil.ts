import { blockFlag, BlockType } from "../tetris/components/atoms/BStick";

export function getBlockArea(currentBlock: BlockType, rotation: number) {
  switch (currentBlock) {
    case "I":
      if (rotation === 0) return { r: 1, c: 4 };
      return { r: 4, c: 1 };
    case "J":
    case "L":
    case "S":
    case "Z":
    case "T":
      if (rotation % 2 === 0) return { r: 2, c: 3 };
      return { r: 3, c: 2 };
    case "O":
      return { r: 2, c: 2 };
    default:
      return { r: 9999, c: 9999 };
  }
}

export function getBlockMaxRotation(currentBlock: BlockType) {
  switch (currentBlock) {
    case "I":
      return blockFlag[0].length;
    case "J":
      return blockFlag[1].length;
    case "L":
      return blockFlag[2].length;
    case "O":
      return blockFlag[3].length;
    case "S":
      return blockFlag[4].length;
    case "Z":
      return blockFlag[5].length;
    case "T":
      return blockFlag[6].length;
    default:
      return 0;
  }
}

export function getNextRotationCPosition(
  currentBlock: BlockType,
  currentRotation: number,
  currentAxis: number
) {
  switch (currentBlock) {
    case "I":
      if (currentRotation === 0) {
        // TODO:구현하기
      }
    // case "J":
    //   return blockFlag[1].length;
    // case "L":
    //   return blockFlag[2].length;
    // case "O":
    //   return blockFlag[3].length;
    // case "S":
    //   return blockFlag[4].length;
    // case "Z":
    //   return blockFlag[5].length;
    // case "T":
    //   return blockFlag[6].length;
    default:
      return 0;
  }
}
