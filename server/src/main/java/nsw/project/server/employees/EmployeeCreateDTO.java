package nsw.project.server.employees;

import java.util.Date;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public class EmployeeCreateDTO {
	
	@NotBlank
	private String firstName;

	private String middleNames;

	@NotBlank
	private String lastName;
	
	@NotBlank
	@Email
	private String email;

	@NotBlank
	@Pattern(regexp = "^(?:\\+?61|0) ?(?:4|[578]\\d) ?(?:\\d ?){8}\\b|^(?:\\+61|61|0)?(?:\\((?:0[1-9])\\)|0[1-9])[ ]?\\d{4}[ ]?\\d{4}$")
	private String phoneNumber;

	@NotBlank
	private String address;

	@NotNull
	private Boolean isPermanent;

	@NotNull
	private Boolean isFullTime;

	@NotNull
	@Min(0)
	@Max(168)
	private short hoursPerWeek;

	private java.util.Date startDate;

	private java.util.Date endDate;

	public EmployeeCreateDTO(@NotBlank String firstName, String middleNames, @NotBlank String lastName,
			@NotBlank @Email String email, @NotBlank @Pattern(regexp = "^(?:\\+?61|0) ?(?:4|[578]\\d) ?(?:\\d ?){8}\\b|^(?:\\+61|61|0)?(?:\\((?:0[1-9])\\)|0[1-9])[ ]?\\d{4}[ ]?\\d{4}$") String phoneNumber,
			@NotBlank String address, @NotNull Boolean isPermanent, @NotNull Boolean isFullTime,
			@NotNull @Min(0) @Max(168) short hoursPerWeek, Date startDate, Date endDate) {
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
