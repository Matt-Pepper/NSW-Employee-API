package nsw.project.server.employees;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = {"${frontend.url}"}, methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PATCH, RequestMethod.DELETE })
public class EmployeeController {

	@Autowired
	private EmployeeService service;
	
	@GetMapping
	public ResponseEntity<Object> getAll() {
		List<Employee> allEmployees = this.service.all();
				
		return new ResponseEntity<Object>(allEmployees, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Employee> findByID(@PathVariable Long id) {
		Optional<Employee> maybeEmployee = this.service.findOne(id);
		
		return new ResponseEntity<>(maybeEmployee.get(), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Employee> create(@Valid @RequestBody EmployeeCreateDTO data) {
		Employee createdEmployee = this.service.create(data);
		
		return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);				
	}
	
    @PatchMapping("/{id}")
    public ResponseEntity<Employee> update(@PathVariable Long id, @Valid @RequestBody EmployeeUpdateDTO data) {
        Optional<Employee> maybeEmployee = this.service.findOne(id);

        this.service.update(maybeEmployee.get(), data);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
	
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {

    	this.service.delete(id);
    	
    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}
