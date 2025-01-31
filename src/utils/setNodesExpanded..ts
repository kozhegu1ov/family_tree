import { FamilyMember } from "@/models/FamilyMember";

export const markNodesExpanded = (nodes: FamilyMember[]) => {
  return nodes.map((node) => ({
    ...node,
    expanded: true,
    children: node.children ? markNodesExpanded(node.children) : undefined,
  }));
};
