import { ConfigurationEntity, EntityType } from '../../../models/configuration-entity';

export type EntityChangeEvent = {
  oldEntity: ConfigurationEntity;
  newEntity: ConfigurationEntity;
  entityType: EntityType;
};

export type EntityDeleteEvent = {
  entity: ConfigurationEntity;
  entityType: EntityType;
}