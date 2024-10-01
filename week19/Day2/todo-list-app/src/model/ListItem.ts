// Interface para definir a estrutura de um item da lista
interface Item {
  id: string;
  item: string;
  checked: boolean;
}

// Classe que implementa a interface Item
class ListItem implements Item {
  constructor(
    private _id: string = '',
    private _item: string = '',
    private _checked: boolean = false
  ) {}

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get item(): string {
    return this._item;
  }

  set item(item: string) {
    this._item = item;
  }

  get checked(): boolean {
    return this._checked;
  }

  set checked(checked: boolean) {
    this._checked = checked;
  }
}

export default ListItem;
