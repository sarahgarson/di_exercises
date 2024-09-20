import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './templates/ListTemplate'

const initApp = (): void => {
    // Inicializa a aplicação
    const fullList = FullList.instance
    const template = ListTemplate.instance

    // Adiciona listener para o formulário de entrada de itens
    const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement
    itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
        event.preventDefault()

        // Obtém o novo item do input
        const input = document.getElementById("newItem") as HTMLInputElement
        const newEntryText: string = input.value.trim()
        if (!newEntryText.length) return

        // Calcula o ID do novo item
        const itemId: number = fullList.list.length
            ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
            : 1

        // Cria novo item
        const newItem = new ListItem(itemId.toString(), newEntryText)
        // Adiciona novo item à lista
        fullList.addItem(newItem)
        // Re-renderiza a lista
        template.render(fullList)
    })

    // Adiciona listener para o botão "Clear"
    const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement
    clearItems.addEventListener('click', (): void => {
        fullList.clearList()
        template.clear()
    })

    // Carrega a lista inicial
    fullList.load()
    // Renderiza a lista inicial
    template.render(fullList)
}

document.addEventListener("DOMContentLoaded", initApp)

