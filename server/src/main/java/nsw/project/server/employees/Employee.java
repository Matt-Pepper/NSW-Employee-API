package nsw.project.server.employees;


import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.Size;

@Entity
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonProperty("id")
	private Long id;
	
	// Personal Information
	@Column
	private String firstName;
	
	@Column
	private String middleNames;
	
	@Column
	private String lastName;
	
	// Contact Details
	@Column
	private String email;
	
	@Column(length = 13)
	@Size(min = 10, max = 13)
	private String phoneNumber;
	
	@Column
	private String address;
	
	// Employee Status
	@Column
	private Boolean isPermanent;
	
	@Column
	private Boolean isFullTime;
	
	@Column
	private short hoursPerWeek;
	
	@Column
	@Temporal(TemporalType.DATE)
	private java.util.Date startDate;
	
	@Column
	@Temporal(TemporalType.DATE)
	private java.util.Date endDate;
	
	public Employee() {
		
	}
	
	public Employee(String firstName, String middleNames, String lastName, String email,
			@Size(min = 10, max = 13) String phoneNumber, String address, Boolean isPermanent, Boolean isFullTime,
			short hoursPerWeek, Date startDate, Date endDate) {
		super();
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

	public short getHoursPerWeek() {
		return hoursPerWeek;
	}

	public void setHoursPerWeek(short hoursPerWeek) {
		this.hoursPerWeek = hoursPerWeek;
	}

	public java.util.Date getStartDate() {
		return startDate;
	}

	public void setStartDate(java.util.Date startDate) {
		this.startDate = startDate;
	}

	public java.util.Date getEndDate() {
		return endDate;
	}

	public void setEndDate(java.util.Date endDate) {
		this.endDate = endDate;
	}
	
}
