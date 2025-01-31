export type FamilyMember = {
    name: string;
    isGender?: boolean;
    date?: string; 
    data?: string;
    wifeData?: string;
    children: FamilyMember[]
}