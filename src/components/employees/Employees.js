import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [employeeSpecialties, updateSpecialties] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(() => {
        
            // 1. Use .map() to get the specialty of each employee
            const justSpecialties = employees.map(
                (employee) => {
                    return employee.specialty
                }
            )
            // 2. Then update a state variable to be a comma-separated string
            updateSpecialties(justSpecialties.join(", "))
        
    }, [employees])

    return (
        <>
            <div>
                Specialties: {employeeSpecialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}
