import ListItem from './ListItem'

interface List {
    list: ListItem[];
    load(): void;
    save(): void;
    clearList(): void;
    addItem(itemObj: ListItem): void;
    removeItem(id: string): void;
}

export default class FullList implements List {
    static instance: FullList = new FullList()

    private constructor(private _list: ListItem[] = []) {}

    get list(): ListItem[] {
        return this._list
    }

    load(): void {
        // Carrega a lista do localStorage
        const storedList: string | null = localStorage.getItem("myList")
        if (typeof storedList !== "string") return

        const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList)

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newListItem)
        })
    }

    save(): void {
        // Salva a lista no localStorage
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    clearList(): void {
        // Limpa a lista
        this._list = []
        this.save()
    }

    addItem(itemObj: ListItem): void {
        // Adiciona um item à lista
        this._list.push(itemObj)
        this.save()
    }

    removeItem(id: string): void {
        // Remove um item da lista
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }
}
