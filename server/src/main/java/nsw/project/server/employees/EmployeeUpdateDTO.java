package nsw.project.server.employees;

import java.util.Date;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Pattern;

public class EmployeeUpdateDTO {
	
	private Long id;

	private String firstName;

	private String middleNames;

	private String lastName;

	@Email
	private String email;

	@Pattern(regexp = "(\\+61|0)[0-9]{9}")
	private String phoneNumber;

	private String address;

	private Boolean isPermanent;

	private Boolean isFullTime;

	@Min(0)
	@Max(168)
	private Short hoursPerWeek;

	private Date startDate;

	private Date endDate;

	public EmployeeUpdateDTO(Long id, String firstName, String middleNames, String lastName,
			@Email String email, @Pattern(regexp = "(\\+61|0)[0-9]{9}") String phoneNumber, String address,
			Boolean isPermanent, Boolean isFullTime, @Min(0) @Max(168) Short hoursPerWeek, Date startDate,
			Date endDate) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.middleNames = middleNames;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.isPermanent = isPermanent;
		this.isFullTime = isFullTime;
		this.hoursPerWeek = hoursPerWeek;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public Long getId() {
		return id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleNames() {
		return middleNames;
	}

	public void setMiddleNames(String middleNames) {
		this.middleNames = middleNames;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Boolean getIsPermanent() {
		return isPermanent;
	}

	public void setIsPermanent(Boolean isPermanent) {
		this.isPermanent = isPermanent;
	}

	public Boolean getIsFullTime() {
		return isFullTime;
	}

	public void setIsFullTime(Boolean isFullTime) {
		this.isFullTime = isFullTime;
	}

	public Short getHoursPerWeek() {
		return hoursPerWeek;
	}

	public void setHoursPerWeek(Short hoursPerWeek) {
		this.hoursPerWeek = hoursPerWeek;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	

}
