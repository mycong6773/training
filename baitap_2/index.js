
// Random 5 số điểm 
const getRandomMark = (start, end, step) => {
    const newArr = [];
    const arr = [...Array(Math.floor((end - start) / step) + 1)].map((_, i) =>
        (start + i * step).toString()
    );
    do {
        const num = Math.floor(Math.random() * arr.length);
        if (!newArr.includes(arr[num])) {
            newArr.push(arr[num]);
        }
    } while (newArr.length < 5);
    return newArr;
};
const marksRdm = getRandomMark(6, 10, 0.5);
console.log(marksRdm);

//    Random 5 số diểm tương ưng 5 môn
const generateStudentMark = (name) => {
    const markArr = ['literature', 'maths', 'chemistry', 'history', 'biology'];

    const studentInfo = new Object();
    const marks = new Object();

    markArr.forEach((mark, index) => {
        marks[mark] = Number(marksRdm[index]);
    })

    studentInfo["name"] = name;
    studentInfo['mark'] = marks;

    return studentInfo;
};

console.log(generateStudentMark("ban a"));
//   tạo mảng gồm 5 obj

const markList = [
    {
        name: "Nguyên Văn A",
        marks: {
            literature: 9,
            maths: 7,
            chemistry: 8,
            history: 10,
            biology: 6
        }
    },
    {
        name: "Nguyên Văn B",
        marks: {
            literature: 9,
            maths: 6,
            chemistry: 8,
            history: 7,
            biology: 6
        }
    },
    {
        name: "Nguyên Văn C",
        marks: {
            literature: 9,
            maths: 9,
            chemistry: 8,
            history: 9,
            biology: 5
        }
    },
    {
        name: "Nguyên Văn D",
        marks: {
            literature: 9,
            maths: 8,
            chemistry: 6,
            history: 9,
            biology: 5,

        }
    }
];
//   List đtb của từng obj

const sizeObject = (object) => {
    return Object.values(object).length;
};

const mediumScore = (student) => {
    let score = 0;
    if (sizeObject(student) > 5) return;
    
    score =
        ((student.literature + student.maths) * 2 +
            student.biology +
            student.chemistry +
            student.history) /
        (sizeObject(student) + 2);
    return score.toFixed(2);

};



const studentGenerateMark = () => {
    const studentMedia = [];

    markList.forEach((student) => {
        const studentInfo = new Object();
        (studentInfo["name"] = student.name),
            (studentInfo["mediaScore"] = mediumScore(student.marks));
        studentMedia.push(studentInfo);
    });

    return studentMedia;
};
// số học sinh có điểm trung bình >= 8
const getGoodStudent = () => {
    const students = studentGenerateMark().filter(
      (student) => student.mediaScore >= 8
    );
  
    return students;
  };
  console.log(getGoodStudent());


// get student list has mark = 8,9,10
const getStudentsMark = () => {
    const studentsInfo = [];

    markList.forEach((student) => {
        const stuObj = new Object();
        const marks = new Object();

        stuObj["name"] = student.name;

        for (const subject in student.marks) {

            if (student.marks[subject] >= 8 && student.marks[subject] <= 10) {
                marks[subject] = student.marks[subject];
            }
            stuObj["marks"] = marks;
        }
        studentsInfo.push(stuObj);
    });

    return studentsInfo;
};




// console.log(getStudentsMark());

const totalMoney = () => {
    const students = [];
    getStudentsMark().forEach((student) => {
        let total = 0;
        const stuObj = new Object();

        for (const subject in student.marks) {
            if (student.marks[subject] === 8) {
                total += 1000000;
            }
            if (student.marks[subject] === 9) {
                total += 2000000;
            }
            if (student.marks[subject] === 10) {
                total += 5000000;
            }
        }
        stuObj['name'] = student.name;
        stuObj['total'] = total;

        students.push(stuObj);
    });
    return students;
};

console.log( totalMoney());



