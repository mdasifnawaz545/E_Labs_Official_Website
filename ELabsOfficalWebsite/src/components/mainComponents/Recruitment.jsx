import React, { useState } from 'react';
import {
  Autocomplete,
  TextField,
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormHelperText,
  Grid,
  Paper,
  Button,
  Typography,
  Avatar,
  Alert,
  InputAdornment
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactsIcon from '@mui/icons-material/Contacts';
import logo from '../mainComponents/Logo.png';

function Recruitment() {
  const paperStyle = {
    padding: '10px 10px',
    width: '100%',
    margin: '10px',
    borderRadius: '15px',
    backgroundColor: 'rgba(240, 240, 240, 0.75)',
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    personalEmail: '',
    kiitMail: '',
    rollNumber: '',
    contactNumber: '',
    gender: '',
    year: '',
    branch: '',
    domainType: '',
    domain: '',
    linkedin: '',
    reason: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.personalEmail) errors.personalEmail = 'Personal Email is required';
    if (!formData.kiitMail) errors.kiitMail = 'KIIT Mail is required';
    if (!formData.rollNumber) errors.rollNumber = 'Roll Number is required';
    if (!formData.contactNumber) errors.contactNumber = 'Contact Number is required';
    if (!formData.gender) errors.gender = 'Gender is required';
    if (!formData.year) errors.year = 'Year is required';
    if (!formData.branch) errors.branch = 'Branch is required';
    if (!formData.domainType) errors.domainType = 'Domain type is required';
    if (!formData.domain) errors.domain = 'Domain is required';
    if (!formData.linkedin) errors.linkedin = 'LinkedIn is required';
    if (!formData.reason) errors.reason = 'Reason is required';
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Perform form submission logic here
      setIsSubmitted(true);
    } else {
      setFormErrors(errors);
    }
  };

  const branches = [
    { label: 'CSE' },
    { label: 'IT' },
    { label: 'ECE' },
    { label: 'EEE' },
    { label: 'Mechanical' },
    { label: 'Civil' },
  ];

  const years = [
    { label: '1st Year' },
    { label: '2nd Year' },
    { label: '3rd Year' },
    { label: '4th Year' },
  ];

  const ForNonTechDomains = [
    { label: 'Video Editors' },
    { label: 'Social Media Engagement' },
    { label: 'Design: UI/UX and Graphics' },
    { label: 'Photography / Videography' },
    { label: 'Content Curation / Creation' },
    { label: 'Marketing / Public Relations' }
  ];

  const ForTechDomains = [
    { label: 'AI/ML' },
    { label: 'Cloud Computing' },
    { label: 'Web Development' },
    { label: 'Embedded Systems' },
    { label: 'Android Development' },
    { label: 'Internet Of Things(IOT)' },
    { label: 'AR/VR/Game Development' },
    { label: 'Java (Backend / Frameworks)' }
  ];

  const [selectedDomain, setSelectedDomain] = useState('');

  const handleBranchChange = (event, value) => {
    handleChange('branch', value ? value.label : '');
  };

  const handleYearChange = (event, value) => {
    handleChange('year', value ? value.label : '');
  };

  const handleDomainChange = (event) => {
    const value = event.target.value;
    setSelectedDomain(value);
    handleChange('domainType', value);
  };

  const handleAutoCompleteChange = (event, value) => {
    handleChange('domain', value ? value.label : '');
  };

  return (
    <div className='mx-auto' style={{ maxWidth: '600px' }}>
      {!isSubmitted ? (
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Paper elevation={10} style={paperStyle}>
              <div className="container mx-auto px-4 py-4">
                <Grid align='center'>
                  <Avatar
                    sx={{ width: 100, height: 100, bgcolor: '#f2f2f282' }}
                  >
                    <img src={logo} alt="Elabs" width={'60px'} />
                  </Avatar>
                  <h2 style={{ margin: 10, borderBottom: '1px solid black' }}>Recruitment Form</h2>
                  <Typography variant='caption' sx={{ fontSize: 16, padding: '10px' }}>
                    Fill the form to get a chance to work With E Labs!
                  </Typography>
                </Grid>
              </div>
              <div className="container px-4 py-4">
                <div className="grid grid-cols-1 gap-y-5">
                  <TextField
                    sx={{ mb: 2 }}
                    fullWidth
                    id="Name"
                    label="Name"
                    variant="filled"
                    required
                    placeholder="Enter Your Name"
                    onChange={(e) => handleChange('name', e.target.value)}
                    error={!!formErrors.name}
                    helperText={formErrors.name}
                    InputProps={{
                      style: { fontSize: 16 },
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      )
                    }}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                  />
                  <TextField
                    sx={{ mb: 2 }}
                    fullWidth
                    id="EmailAddress"
                    label="Personal Email"
                    variant="outlined"
                    required
                    placeholder="Enter Your Personal Email Id"
                    onChange={(e) => handleChange('personalEmail', e.target.value)}
                    error={!!formErrors.personalEmail}
                    helperText={formErrors.personalEmail}
                    InputProps={{
                      style: { fontSize: 16 },
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      )
                    }}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                  />
                  <TextField
                    sx={{ mb: 2 }}
                    fullWidth
                    id="Email(KIIT)"
                    label="KIIT Mail"
                    variant="outlined"
                    required
                    color="success"
                    focused
                    placeholder="Enter Your KIIT Mail Id"
                    onChange={(e) => handleChange('kiitMail', e.target.value)}
                    error={!!formErrors.kiitMail}
                    helperText={formErrors.kiitMail}
                    InputProps={{
                      style: { fontSize: 16 },
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmailIcon />
                        </InputAdornment>
                      )
                    }}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                  />
                  <TextField
                    sx={{ mb: 2 }}
                    fullWidth
                    id="roll"
                    label="Roll Number"
                    type="number"
                    variant="filled"
                    color="success"
                    focused
                    required
                    onChange={(e) => handleChange('rollNumber', e.target.value)}
                    error={!!formErrors.rollNumber}
                    helperText={formErrors.rollNumber}
                    InputProps={{
                      style: { fontSize: 16 },
                      onWheel: (event) => event.target.blur()
                    }}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                  />
                  <TextField
                    sx={{ mb: 2 }}
                    fullWidth
                    id="ContactNumber"
                    label="Contact Number"
                    type="number"
                    variant="filled"
                    focused
                    required
                    onChange={(e) => handleChange('contactNumber', e.target.value)}
                    error={!!formErrors.contactNumber}
                    helperText={formErrors.contactNumber}
                    InputProps={{
                      style: { fontSize: 16 },
                      startAdornment: (
                        <InputAdornment position="start">
                          <ContactsIcon />
                        </InputAdornment>
                      ),
                      onWheel: (event) => event.target.blur(),
                    }}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                  />
                  <FormControl component="fieldset" error={!!formErrors.gender}>
                    <FormLabel component="legend" sx={{ fontSize: 16 }}>Gender</FormLabel>
                    <RadioGroup
                      row
                      aria-label="gender"
                      name="gender"
                      onChange={(e) => handleChange('gender', e.target.value)}
                    >
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    <FormHelperText>{formErrors.gender}</FormHelperText>
                  </FormControl>
                  <Autocomplete
                    disablePortal
                    options={years}
                    onChange={handleYearChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Year"
                        required
                        error={!!formErrors.year}
                        helperText={formErrors.year}
                        InputLabelProps={{ style: { fontSize: 16 } }}
                      />
                    )}
                  />
                  <Autocomplete
                    disablePortal
                    options={branches}
                    onChange={handleBranchChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Branch"
                        required
                        error={!!formErrors.branch}
                        helperText={formErrors.branch}
                        InputLabelProps={{ style: { fontSize: 16 } }}
                      />
                    )}
                  />
                  <FormControl component="fieldset" error={!!formErrors.domainType}>
                    <FormLabel component="legend" sx={{ fontSize: 16 }}>Domain Type</FormLabel>
                    <RadioGroup
                      row
                      aria-label="domainType"
                      name="domainType"
                      onChange={handleDomainChange}
                    >
                      <FormControlLabel value="Tech" control={<Radio />} label="Tech" />
                      <FormControlLabel value="Non-Tech" control={<Radio />} label="Non-Tech" />
                    </RadioGroup>
                    <FormHelperText>{formErrors.domainType}</FormHelperText>
                  </FormControl>
                  {selectedDomain && (
                    <Autocomplete
                      disablePortal
                      options={selectedDomain === 'Tech' ? ForTechDomains : ForNonTechDomains}
                      onChange={handleAutoCompleteChange}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Domain"
                          required
                          error={!!formErrors.domain}
                          helperText={formErrors.domain}
                          InputLabelProps={{ style: { fontSize: 16 } }}
                        />
                      )}
                    />
                  )}
                  <TextField
                    sx={{ mb: 2 }}
                    fullWidth
                    id="Linkedin"
                    label="LinkedIn"
                    variant="outlined"
                    required
                    placeholder="Paste Your LinkedIn Profile Link"
                    onChange={(e) => handleChange('linkedin', e.target.value)}
                    error={!!formErrors.linkedin}
                    helperText={formErrors.linkedin}
                    InputProps={{
                      style: { fontSize: 16 },
                      startAdornment: (
                        <InputAdornment position="start">
                          <LinkedInIcon />
                        </InputAdornment>
                      )
                    }}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                  />
                  <TextField
                    sx={{ mb: 2 }}
                    fullWidth
                    id="github"
                    label="Github"
                    variant="outlined"
                    placeholder="Paste Your Github Profile Link"
                    onChange={(e) => handleChange('github', e.target.value)}
                    InputProps={{
                      style: { fontSize: 16 },
                      startAdornment: (
                        <InputAdornment position="start">
                          <GitHubIcon />
                        </InputAdornment>
                      )
                    }}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                  />
                  <TextField
                    sx={{ mb: 2 }}
                    fullWidth
                    id="reason"
                    label="Why do you want to join?"
                    multiline
                    rows={2}
                    required
                    placeholder="Write your reason"
                    onChange={(e) => handleChange('reason', e.target.value)}
                    error={!!formErrors.reason}
                    helperText={formErrors.reason}
                    InputProps={{ style: { fontSize: 16 } }}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                  />
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                    onClick={handleSubmit}
                    sx={{ fontSize: 16 }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Alert severity="success" onClose={() => setIsSubmitted(false)}>
          Form submitted successfully!
        </Alert>
      )}
    </div>
  );
}

export default Recruitment;
