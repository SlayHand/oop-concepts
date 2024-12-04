class Student{
    #name
    #id
    #status
    constructor(name, id){
        this.#id = id
        this.#name = name
        this.#status = 'Active'
    } 
    getId(){
        
    } 
    getName(){
        return this.#name
    } 
    setName(){
        this.#name = name
    } 
    setStatus(){
        const statuses = ['Active', 'Expelled', 'Finished', 'Inactive']
        if(statuses.includes(status)){
            this.#status = status
        } 
    }  
} 
const student = new Student ('John', 1)
console.log(student.getName())
student.name ='Mary'
console.log(student.getName)