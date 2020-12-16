import { PropsWithChildren } from "react";
import BStick, { BlockType } from "./atoms/BStick";

const PlayerBlock = (
  props: PropsWithChildren<{ blockType: BlockType; rotation: number }>
) => {
  return <BStick blockType={props.blockType} rotation={props.rotation} />;
};

export { PlayerBlock };
