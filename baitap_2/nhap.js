const getRandomMark = (start, end, step) => {
  const newArr = [];
  const arr = [...Array(Math.floor((end - start) / step) + 1)].map((_, i) =>
    (start + i * step).toString()
  );
  do {
    const num = Math.floor(Math.random() * arr.length);
    if (!newArr.includes(arr[num])) {
      newArr.push(arr[num])
    }
  } while (newArr.length < 5);
  return newArr;
}
const marksRdm = getRandomMark(6, 10, 0.5)
console.log(marksRdm);


// bài 2
//  const diem5mon=(name)=>{
//    const markArr=['toan','lí','hóa','sinh','sử'];
//    const student=new Object()
//    const marks=new Object();
//    markArr.forEach((mark,index)=>{
//      marks[mark]=Number(marksRdm[index])
//    })
//    student['name']=name;
//    student['mark']=marks;
//    return student
//  }
//  console.log(diem5mon('my'));
const rdm5mon = (name) => {
  const markArr = ['toán', 'lí', 'hóa', 'sinh', 'sử'];
  const studentInfo = new Object();
  const marks = new Object();
  markArr.forEach((mark, index) => {
    marks[mark] = Number(marksRdm[index])
  })
  studentInfo["name"] = name;
  studentInfo["mark"] = marks
  return studentInfo
}
console.log(rdm5mon("mỹ"));


const markList = [
  {
    name: "Nguyên Văn A",
    marks: {
      literature: 9,
      maths: 7,
      chemistry: 8,
      history: 10,
      biology: 9
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
const sizeObject = (object) => {
  return Object.values(object).length
}
const mediumScore = (student) => {
  let score = 0;
  if (sizeObject(student) > 5) return;
  score = (
    (student.literature + student.maths) * 2 + student.chemistry + student.biology + student.history) / (sizeObject(student) + 2)
  ;
  return score.toFixed(2)
}
const dtb5hs = () => {
  const studentMedia = [];
  let ss=(a,b)=>a-b;
  markList.forEach((student) => {
    const studentInfo = new Object();
    (studentInfo["name"] = student.name),
    (studentInfo["media"] = mediumScore(student.marks));
    studentMedia.push(studentInfo)
  })
  return studentMedia
}
console.log(dtb5hs());




//danh sách học sinh và diểm trung bình
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

//Lọc môn tốt và tệ của từng học sinh
const filterSubject = (marks) =>{
  // const statusSubject  = new Object();
  const student=new Object();
  const keyArr = Object.keys(marks);
  console.log(keyArr);
  //lấy bạn có điểm từng môn cao nhất
  // for( ){};
  //lấy môn tốt nhất
  for (const subject in student.marks) {
      let mark = marks[keyArr[0]];
      if(mark <= marks[subject]){
        mark =  marks[subject]
        student['goodsubject'] = subject;
      } 
  }
  //lấy môn tệ nhất
  for (const subject in student.marks) {
      let mark = marks[keyArr[0]];
      if(mark >= marks[subject]){
        mark =  marks[subject]
        student['badsubject'] = subject;
      }
  }
  
  return student;
}
const getStudentGood=()=>{
  const monhoc=[];
  markList.forEach((student)=>{
    const obj={};
    obj['name']=student.name;
  })
}

//Tìm môn tốt và tệ nhất của từng học sinh
const getStatusSubjectStudent = () =>{
  const students = [];

  markList.forEach((student) =>{
    const stuObj = {};
    stuObj['name'] = student.name;
    stuObj['statusSubject'] = filterSubject(student.marks);
    students.push(stuObj);
  })
  return students;
}
console.log(getStatusSubjectStudent());

const dtb = markList.map((item) => {
  let sum = 0;
  let monHoc = item.marks;
  for(let diem in monHoc) {
      if(monHoc.hasOwnProperty(diem)) {
          sum = (sum + parseFloat(monHoc[diem])/5)
      }
  }
  const studentEl = new Object();
  studentEl.name = item.name;
  studentEl.diem = sum
  return studentEl

})
console.log(dtb);

const bxh = dtb.filter(item => item.diem >=8).map(item => {
  return item.name + " "
})

console.log("Bạn được học sinh giỏi là: " + bxh);