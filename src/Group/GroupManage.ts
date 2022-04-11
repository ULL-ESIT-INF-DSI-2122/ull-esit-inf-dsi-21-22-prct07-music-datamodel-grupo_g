import {Group} from './Group';

export interface GroupManage {
  getGroups(): Group[];
  setGroups(Groups: Group[]): void;
  addGroup(Group: Group): void;
  removeGroup(Group: string): void;
}
