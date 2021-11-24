export enum EntityType {
    Group = 'Group', 
    Signal = 'Signal',
    Dashboard = 'Dashboard'
}

export const EntityIcons: {[p in EntityType]: string} = {
    [EntityType.Group]: 'fas fa-folder',
    [EntityType.Dashboard]: 'adk adk-dashboard',
    [EntityType.Signal]: 'fas fa-code'
}

export class Field<T> {
    public Value: T;
    public OOAttributes: string[];
}

export class ConfigurationEntity {
    public Id: string;

    public Path: string[];

    public Name: Field<string>
    public Description: Field<string>;

    public AdditionalFields: {[p: string]: Field<string> };
    
    public GroupId: string;

    public CreatedBy: string;
    public CreatedOn: Date;

    public ChangedBy?: string;
    public ChangedOn?: Date;

    public IsInstanceOf?: boolean;
    public IsTemplate: boolean;
}


