
const employees = [
  {
    "id": 1,
    "name": "Aarav Patel",
    "email": "employee1@example.com",
    "pass": "123",
    "taskNumbers": {
      "newTask": 2,
      "activeTask": 1,
      "completedTask": 1,
      "failedTask": 1
    },
    "tasks": [
      {
        "color": "blue",
        "taskDate": "2026-10-16",
        "taskTitle": "Prepare Monthly Report",
        "description": "Prepare and submit the monthly performance report.",
        "category": "Reporting",
        "priority": "high"
      },
      {
        "color": "yellow",
        "taskDate": "2026-10-15",
        "taskTitle": "Update Client Records",
        "description": "Verify and update existing client information.",
        "category": "Administration",
        "priority": "med"
      },
      {
        "color": "green",
        "taskDate": "2026-10-12",
        "taskTitle": "Attend Team Meeting",
        "description": "Attend the weekly team meeting and document key points.",
        "category": "Meetings",
        "priority": "low"
      },
      {
        "color": "red",
        "taskDate": "2026-10-10",
        "taskTitle": "Submit Expense Report",
        "description": "Submit the expense report before the deadline.",
        "category": "Finance",
        "priority": "high"
      },
      {
        "color": "blue",
        "taskDate": "2026-10-17",
        "taskTitle": "Review Project Documents",
        "description": "Review project documents and identify missing information.",
        "category": "Project Management",
        "priority": "med"
      }
    ]
  },
  {
    "id": 2,
    "name": "Priya Sharma",
    "email": "employee2@example.com",
    "pass": "123",
    "taskNumbers": {
      "newTask": 2,
      "activeTask": 1,
      "completedTask": 1,
      "failedTask": 1
    },
    "tasks": [
      {
        "color": "blue",
        "taskDate": "2026-10-16",
        "taskTitle": "Design Social Media Posts",
        "description": "Create promotional posts for the upcoming campaign.",
        "category": "Marketing",
        "priority": "med"
      },
      {
        "color": "yellow",
        "taskDate": "2026-10-15",
        "taskTitle": "Analyze Campaign Results",
        "description": "Review campaign metrics and prepare insights.",
        "category": "Analytics",
        "priority": "high"
      },
      {
        "color": "green",
        "taskDate": "2026-10-13",
        "taskTitle": "Update Marketing Calendar",
        "description": "Add upcoming campaigns and deadlines to the calendar.",
        "category": "Marketing",
        "priority": "low"
      },
      {
        "color": "red",
        "taskDate": "2026-10-11",
        "taskTitle": "Send Newsletter",
        "description": "Prepare and distribute the scheduled email newsletter.",
        "category": "Communication",
        "priority": "high"
      },
      {
        "color": "blue",
        "taskDate": "2026-10-18",
        "taskTitle": "Research Competitors",
        "description": "Compare competitor campaigns, pricing, and messaging.",
        "category": "Research",
        "priority": "med"
      }
    ]
  },
  {
    "id": 3,
    "name": "Rahul Gupta",
    "email": "employee3@example.com",
    "pass": "123",
    "taskNumbers": {
      "newTask": 2,
      "activeTask": 1,
      "completedTask": 1,
      "failedTask": 1
    },
    "tasks": [
      {
        "color": "blue",
        "taskDate": "2026-10-16",
        "taskTitle": "Fix Login Validation",
        "description": "Resolve login form validation issues in the application.",
        "category": "Development",
        "priority": "high"
      },
      {
        "color": "yellow",
        "taskDate": "2026-10-15",
        "taskTitle": "Test API Endpoints",
        "description": "Test API responses and verify error handling.",
        "category": "Testing",
        "priority": "med"
      },
      {
        "color": "green",
        "taskDate": "2026-10-14",
        "taskTitle": "Review Pull Requests",
        "description": "Review code changes and provide feedback to teammates.",
        "category": "Code Review",
        "priority": "low"
      },
      {
        "color": "red",
        "taskDate": "2026-10-12",
        "taskTitle": "Deploy Test Build",
        "description": "Deploy the latest application build to the test environment.",
        "category": "Deployment",
        "priority": "high"
      },
      {
        "color": "blue",
        "taskDate": "2026-10-19",
        "taskTitle": "Optimize Database Queries",
        "description": "Improve slow database queries and measure performance.",
        "category": "Development",
        "priority": "med"
      }
    ]
  },
  {
    "id": 4,
    "name": "Neha Singh",
    "email": "employee4@example.com",
    "pass": "123",
    "taskNumbers": {
      "newTask": 2,
      "activeTask": 1,
      "completedTask": 1,
      "failedTask": 1
    },
    "tasks": [
      {
        "color": "blue",
        "taskDate": "2026-10-16",
        "taskTitle": "Verify Supplier Invoices",
        "description": "Check supplier invoices against purchase records.",
        "category": "Finance",
        "priority": "high"
      },
      {
        "color": "yellow",
        "taskDate": "2026-10-15",
        "taskTitle": "Reconcile Transactions",
        "description": "Compare transaction records and identify discrepancies.",
        "category": "Accounting",
        "priority": "med"
      },
      {
        "color": "green",
        "taskDate": "2026-10-13",
        "taskTitle": "Prepare Budget Summary",
        "description": "Summarize departmental expenses and budget utilization.",
        "category": "Finance",
        "priority": "low"
      },
      {
        "color": "red",
        "taskDate": "2026-10-11",
        "taskTitle": "Submit Tax Documents",
        "description": "Organize and submit the required tax documentation.",
        "category": "Compliance",
        "priority": "high"
      },
      {
        "color": "blue",
        "taskDate": "2026-10-20",
        "taskTitle": "Audit Expense Records",
        "description": "Review expense records and flag unusual transactions.",
        "category": "Auditing",
        "priority": "med"
      }
    ]
  },
  {
    "id": 5,
    "name": "Vikram Verma",
    "email": "employee5@example.com",
    "pass": "123",
    "taskNumbers": {
      "newTask": 2,
      "activeTask": 1,
      "completedTask": 1,
      "failedTask": 1
    },
    "tasks": [
      {
        "color": "blue",
        "taskDate": "2026-10-16",
        "taskTitle": "Resolve Customer Queries",
        "description": "Respond to pending customer questions and requests.",
        "category": "Customer Support",
        "priority": "high"
      },
      {
        "color": "yellow",
        "taskDate": "2026-10-15",
        "taskTitle": "Track Support Tickets",
        "description": "Monitor open support tickets and update their status.",
        "category": "Customer Support",
        "priority": "med"
      },
      {
        "color": "green",
        "taskDate": "2026-10-14",
        "taskTitle": "Update Help Center",
        "description": "Revise help articles to address common customer issues.",
        "category": "Documentation",
        "priority": "low"
      },
      {
        "color": "red",
        "taskDate": "2026-10-12",
        "taskTitle": "Complete Feedback Summary",
        "description": "Compile customer feedback and highlight recurring issues.",
        "category": "Reporting",
        "priority": "med"
      },
      {
        "color": "blue",
        "taskDate": "2026-10-21",
        "taskTitle": "Prepare Customer Survey",
        "description": "Draft a customer satisfaction survey for the next campaign.",
        "category": "Research",
        "priority": "low"
      }
    ]
  }
]
const admin=[ {
    "id": 100,
    "email": "admin@example.com",
    "pass": "123"
  }
]
export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin};
}