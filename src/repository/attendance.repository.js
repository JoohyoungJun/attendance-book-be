import { prisma } from '#db/prisma.js';
import parseYmdToUtcDate from '#utils/toutc.util.js';

// 출석 생성
function createAttendance({ date, studentId, status, note = '' }) {
  const dateValue = typeof date === 'string' ? parseYmdToUtcDate(date) : date;
  return prisma.attendance.create({
    data: {
      date: dateValue,
      studentId,
      status,
      note,
    },
  });
}

// 특정 날짜의 특정 학생 출석 불러오기
function findAttendanceByDateAndId(attendanceId) {
  return prisma.attendance.findUnique({
    where: {
      id: attendanceId,
    },
  });
}

// 특정 날짜의 전체 학생 출석 불러오기
function findAttendanceByDate(date) {
  const dateValue = typeof date === 'string' ? parseYmdToUtcDate(date) : date;
  return prisma.attendance.findMany({
    where: {
      date: dateValue,
    },
  });
}

// 출석 수정하기
function updateAttendance(attendanceId, { status, note }) {
  return prisma.attendance.update({
    where: {
      id: attendanceId,
    },
    data: {
      status,
      note,
    },
  });
}

// 특정 날짜의 특정 학생 출석 삭제하기
function deleteAttendance(attendanceId) {
  return prisma.attendance.delete({
    where: {
      id: attendanceId,
    },
  });
}

export const attendanceRepository = {
  createAttendance,
  findAttendanceByDateAndId,
  findAttendanceByDate,
  updateAttendance,
  deleteAttendance,
};
