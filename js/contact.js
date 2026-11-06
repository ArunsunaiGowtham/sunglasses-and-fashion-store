/**
 * Sunglasses & Fashion Accessories Store
 * Contact Form Validation & Submission Handler
 * Project 26 Strict Validation Requirements
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactEnquiryForm");
    if (!form) return;

    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const phoneInput = document.getElementById("contactPhone");
    const subjectInput = document.getElementById("contactSubject");
    const messageInput = document.getElementById("contactMessage");

    // Real-time sanitization & visual feedback
    if (nameInput) {
      nameInput.addEventListener("input", function () {
        validateName(nameInput);
      });
    }

    if (emailInput) {
      emailInput.addEventListener("input", function () {
        validateEmail(emailInput);
      });
    }

    if (phoneInput) {
      phoneInput.addEventListener("input", function () {
        validatePhone(phoneInput);
      });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const isNameValid = validateName(nameInput);
      const isEmailValid = validateEmail(emailInput);
      const isPhoneValid = validatePhone(phoneInput);
      const isSubjectValid = validateSubject(subjectInput);
      const isMessageValid = validateMessage(messageInput);

      if (!isNameValid || !isEmailValid || !isPhoneValid || !isSubjectValid || !isMessageValid) {
        window.showToast("Please correct the errors in the form before submitting.", "danger", "bi-exclamation-octagon-fill");
        return;
      }

      // Display honest submission feedback
      const feedbackAlert = document.getElementById("contactSubmitFeedback");
      if (feedbackAlert) {
        feedbackAlert.className = "alert alert-success d-flex align-items-center gap-2 mt-3";
        feedbackAlert.innerHTML = `
          <i class="bi bi-check-circle-fill fs-5"></i>
          <div>
            <strong>Inquiry Verified Successfully!</strong>
            <div class="small mt-1">Thank you, <em>${nameInput.value.trim()}</em>. As this is a frontend demonstration template, your message has been validated locally and logged to the browser console. No real email service is connected.</div>
          </div>
        `;
        feedbackAlert.classList.remove("d-none");
      }

      window.showToast("Contact inquiry submitted successfully (Frontend Demo)!", "success", "bi-send-check-fill");
      console.log("Validated Contact Form Submission:", {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        subject: subjectInput.value.trim(),
        message: messageInput.value.trim(),
        timestamp: new Date().toISOString()
      });

      form.reset();
      clearValidationStyles([nameInput, emailInput, phoneInput, subjectInput, messageInput]);
    });
  });

  function validateName(input) {
    if (!input) return false;
    const val = input.value.trim();
    const errorEl = document.getElementById("nameError");

    // Must not be empty, must NOT be numeric-only, must contain valid letters
    const hasLetters = /[a-zA-Z]/.test(val);
    const isPureNumbers = /^[0-9\s\+\-\.]+$/.test(val);

    if (val.length < 2) {
      setInvalid(input, errorEl, "Name must be at least 2 characters long.");
      return false;
    } else if (isPureNumbers || !hasLetters) {
      setInvalid(input, errorEl, "Name cannot consist solely of numbers. Please enter your real name.");
      return false;
    } else {
      setValid(input, errorEl);
      return true;
    }
  }

  function validateEmail(input) {
    if (!input) return false;
    const val = input.value.trim();
    const errorEl = document.getElementById("emailError");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!val) {
      setInvalid(input, errorEl, "Email address is required.");
      return false;
    } else if (!emailRegex.test(val)) {
      setInvalid(input, errorEl, "Please enter a valid email format (e.g., name@example.com).");
      return false;
    } else {
      setValid(input, errorEl);
      return true;
    }
  }

  function validatePhone(input) {
    if (!input) return true; // Optional or validated if provided
    const val = input.value.trim();
    const errorEl = document.getElementById("phoneError");

    if (!val) {
      // If optional and empty, clear
      setValid(input, errorEl);
      return true;
    }

    // Must NOT contain alphabetic letters
    const containsLetters = /[a-zA-Z]/.test(val);
    const validPhonePattern = /^[0-9\+\-\s\(\)]{7,20}$/;

    if (containsLetters) {
      setInvalid(input, errorEl, "Phone number cannot contain letters. Only digits and symbols (+, -, parentheses) allowed.");
      return false;
    } else if (!validPhonePattern.test(val)) {
      setInvalid(input, errorEl, "Please enter a valid telephone number (7 to 20 digits).");
      return false;
    } else {
      setValid(input, errorEl);
      return true;
    }
  }

  function validateSubject(input) {
    if (!input) return false;
    const val = input.value.trim();
    const errorEl = document.getElementById("subjectError");

    if (val.length < 3) {
      setInvalid(input, errorEl, "Subject must be at least 3 characters.");
      return false;
    } else {
      setValid(input, errorEl);
      return true;
    }
  }

  function validateMessage(input) {
    if (!input) return false;
    const val = input.value.trim();
    const errorEl = document.getElementById("messageError");

    if (val.length < 10) {
      setInvalid(input, errorEl, "Message must be at least 10 characters long.");
      return false;
    } else {
      setValid(input, errorEl);
      return true;
    }
  }

  function setInvalid(input, errorEl, message) {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = "block";
    }
  }

  function setValid(input, errorEl) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    if (errorEl) {
      errorEl.textContent = "";
      errorEl.style.display = "none";
    }
  }

  function clearValidationStyles(inputs) {
    inputs.forEach((input) => {
      if (input) {
        input.classList.remove("is-valid", "is-invalid");
      }
    });
  }
})();

