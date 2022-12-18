import { Activity } from "./searchdoing.js"

export class ActivityMake {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }
  
  load() {
    this.entries = []
  }
  
  async add() {
    const makeAnything = await Activity.search()
    
   this.entries = [makeAnything]

   this.update()
}
}


export class ActivityDoing extends ActivityMake {
  constructor(root) {
    super(root)
    
    this.resultActivity = this.root.querySelector('.result')
    
    this.onadd()
    this.update()
}

onadd() {
  const addButton = this.root.querySelector('.searchActividad')
  
  addButton.onclick = () => {
    alert(`Please wait a few moments so I can find something for you!`)
    this.add()
    
  }
}
  
update() {
    this.removeAllDiv()
    
    this.entries.forEach( makeAnything => {
      const paragraph = this.createDiv()
     
      paragraph.querySelector('.actividad').textContent = `Activity: ${makeAnything.activity}`
      paragraph.querySelector('.type').textContent = `Activity's type: ${makeAnything.type}`
      paragraph.querySelector('.participants').textContent = `Participants: ${makeAnything.participants}`

      this.resultActivity.append(paragraph)
    })
}
  
createDiv() {
    const div = document.createElement('div')

    div.innerHTML = `
        <p class="actividad">Caminhada</p>
        <p class="type">Atividade Física</p>
        <p class="participants">1</p>
        `
        return div
}

removeAllDiv() {
  
   this.resultActivity.querySelectorAll('div').forEach((div) => {
    div.remove()
  })
}
}
