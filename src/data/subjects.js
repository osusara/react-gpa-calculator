const subjects = {
  applied: {
    Faculty: "Applied Sciences",
    cis: {
      department: "Computing and Information Systems",
      year1: {
        year: 1,
        semester1: {
          semester: 1,
          totalCredits: 13,
          subjects: [
            {
              id: "IS11201",
              title: "Fundamentals of Information Systems",
              credits: 2,
              compulsory: true
            },
            {
              id: "IS11302",
              title: "Structured Programming Techniques",
              credits: 3,
              compulsory: true
            },
            {
              id: "IS11203",
              title: "Information Systems Theory and Practice",
              credits: 2,
              compulsory: true
            },
            {
              id: "IS11204",
              title: "Information System Infrastructure",
              credits: 2,
              compulsory: true
            },
            {
              id: "IS11205",
              title: "Fundamentals of Mathematics",
              credits: 2,
              compulsory: true
            },
            {
              id: "IS11206",
              title: "Statistics & Probability Theory",
              credits: 2,
              compulsory: true
            },
            {
              id: "CPE1101",
              title: "Professional English I",
              credits: 0,
              compulsory: true
            }
          ]
        },
        semester2: {
          semester: 2,
          totalCredits: 15,
          subjects: [
            {
              id: "IS12307",
              title: "Object Oriented Programming",
              credits: 3,
              compulsory: true
            },
            {
              id: "IS12308",
              title: "Database Systems",
              credits: 3,
              compulsory: true
            },
            {
              id: "IS12209",
              title: "Emerging Technologies for Information Systems",
              credits: 2,
              compulsory: true
            },
            {
              id: "IS12210",
              title: "Advanced Mathematics",
              credits: 2,
              compulsory: true
            },
            {
              id: "IS12311",
              title: "Analysis of Algorithms",
              credits: 3,
              compulsory: true
            },
            {
              id: "IS12212",
              title: "Human Computer Interaction",
              credits: 2,
              compulsory: true
            },
            {
              id: "CPE1201",
              title: "Professional English II",
              credits: 0,
              compulsory: true
            }
          ]
        }
      }
    }
  }
};

export default subjects;
