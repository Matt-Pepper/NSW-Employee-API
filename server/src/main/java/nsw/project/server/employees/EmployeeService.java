package nsw.project.server.employees;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.server.ResponseStatusException;

import jakarta.transaction.Transactional;


@Service
@Transactional
public class EmployeeService {
	@Autowired
	private EmployeeRepository repository;

	public List<Employee> all() {
		return this.repository.findAll();
	}

	public Optional<Employee> findOne(Long id) {
		
		Optional<Employee> maybeEmployee = this.repository.findById(id);
		
		if (maybeEmployee.isEmpty()) {
            String errorString = "No Employee with id: " + id;
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, errorString);
        }
		
		return maybeEmployee;
	}

	public Employee create(EmployeeCreateDTO data) {

		String cleanedFirstName = StringUtils.capitalize(data.getFirstName().trim().toLowerCase());
		
		String cleanedMiddleNames;
		if(data.getMiddleNames() == null) {
			cleanedMiddleNames = null;
		} else {
			cleanedMiddleNames = StringUtils.capitalize(data.getMiddleNames().trim().toLowerCase());
		}
		
		String cleanedLastName = StringUtils.capitalize(data.getLastName().trim().toLowerCase());
		
		String cleanedEmail = data.getEmail().trim();

		String cleanedPhoneNumber = data.getPhoneNumber().trim();

		String cleanedAddress = data.getAddress().trim();
		
		Date checkedStartDate;
		
		if(data.getStartDate() == null) {
			checkedStartDate = null;
			
		} else {
			checkedStartDate = data.getStartDate();
		}
		
		Date checkedEndDate;
		
		if(data.getEndDate() == null) {
			checkedEndDate = null;
			
		} else {
			checkedEndDate = data.getEndDate();
		}
			
		Employee newEmployee = new Employee(cleanedFirstName, cleanedMiddleNames, cleanedLastName, cleanedEmail, cleanedPhoneNumber, cleanedAddress, data.getIsPermanent(), data.getIsFullTime(), data.getHoursPerWeek(), checkedStartDate, checkedEndDate);

		this.repository.save(newEmployee);
		
		return newEmployee;
	}
	
	public Employee update(Employee employeeToUpdate, EmployeeUpdateDTO data) {
		
		if (data.getFirstName() != null && !data.getFirstName().isBlank()) {
			employeeToUpdate.setFirstName(StringUtils.capitalize(data.getFirstName().trim().toLowerCase()));
        }
		
		if (data.getMiddleNames() != null) {
            employeeToUpdate.setMiddleNames(StringUtils.capitalize(data.getMiddleNames().trim().toLowerCase()));
        }
		
		if (data.getLastName() != null && !data.getLastName().isBlank()) {
            employeeToUpdate.setLastName(StringUtils.capitalize(data.getLastName().trim().toLowerCase()));
        }
		
		if (data.getEmail() != null && !data.getEmail().isBlank()) {
            employeeToUpdate.setEmail(data.getEmail().trim());
        }
		
		if (data.getPhoneNumber() != null && !data.getPhoneNumber().isBlank()) {
            employeeToUpdate.setPhoneNumber(data.getPhoneNumber().trim());
        }
		
		if (data.getAddress() != null && !data.getAddress().isBlank()) {
            employeeToUpdate.setAddress(data.getAddress().trim());
        }
		
		if (data.getIsPermanent() != null) {
            employeeToUpdate.setIsPermanent(data.getIsPermanent());
        }
		
		if (data.getIsFullTime() != null) {
            employeeToUpdate.setIsFullTime(data.getIsFullTime());
        }
		
		if (data.getHoursPerWeek() != null) {
            employeeToUpdate.setHoursPerWeek(data.getHoursPerWeek());
        }
		
		if (data.getStartDate() != null) {
            employeeToUpdate.setStartDate(data.getStartDate());
        }
		
		if (data.getEndDate() != null) {
            employeeToUpdate.setEndDate(data.getEndDate());
        }
		
		this.repository.save(employeeToUpdate);
		
		return employeeToUpdate;
		
	}
	
	public void delete(Long id) {
		Optional<Employee> maybeEmployee = findOne(id);
		
		Employee employee = maybeEmployee.get();
		
		this.repository.delete(employee);
	}
	
}
