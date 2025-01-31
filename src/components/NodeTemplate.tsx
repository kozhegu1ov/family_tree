import { FamilyMember } from "@/models/FamilyMember";
import "./NodeTemplate.css";

type NodeTemplate = {
  node: FamilyMember;
};

export const FamilyMemberTemplate = ({ node }: NodeTemplate) => {
  return (
    <div
      className={`flex flex-column align-items-center ${
        node.isGender ? "gender-node-content-man" : "gender-node-content-woman"
      }`}
    >
      <h4>{node.name}</h4>
      <p className="text-woman">{node.wifeData}</p>
    </div>
  );
};
