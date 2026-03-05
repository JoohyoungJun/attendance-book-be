import { prisma } from '#db/prisma.js';

// 학생 생성
function createStudent(data) {
  return prisma.student.create({
    data,
  });
}

// 특정 학생 조회
function findStudentById(id) {
  return prisma.student.findUnique({
    where: { id: id },
  });
}
// 모든 학생 조회
function findAllStudents() {
  return prisma.student.findMany();
}

// 학생 정보 수정
function updateStudent(id, data) {
  return prisma.student.update({
    where: { id: id },
    data,
  });
}

// 학생 삭제
function deleteStudent(id) {
  return prisma.student.delete({
    where: { id: id },
  });
}

export const studentRepository = {
  createStudent,
  findStudentById,
  findAllStudents,
  updateStudent,
  deleteStudent,
};
