class Student {
    constructor(name){
        this.name = name;
        this.askedQuestionNum = 0;
    }
    askQuestion(){
        console.log("???");
        this.askedQuestionNum++;
    }
}

class StudentWithWork extends Student{
    constructor(name){
        super(name);
        this.workDone = 0;
    }
    doWork(){
        this.workDone++;
    }
}

const stu1 = new Student("levi");
const stu2 = new Student("cs");
const stu3 = new StudentWithWork("aaa");

console.log(stu1);
console.log(stu2);
stu3.doWork();
console.log(stu3);