import { OrganizationChart } from "primereact/organizationchart";
import { familyData } from "./constants/familyData";
import { markNodesExpanded } from "./utils/setNodesExpanded.";
import { FamilyMemberTemplate } from "./components/NodeTemplate";
import { FamilyMember } from "./models/FamilyMember";

export default function App() {
  const nodeTemplate = (node: FamilyMember) => {
    return <FamilyMemberTemplate node={node} />;
  };

  return (
    <OrganizationChart
      value={markNodesExpanded(familyData)}
      nodeTemplate={nodeTemplate}
    />
  );
}
