Feature: User can sign up
  As a application owner
  So visitors can create an account
  There should be a sign-up form on my site

  Scenario: Creates and account
    Given I visit the site
    Then I click "Sign up"
    And I fill "Email" with "isabelle@email.com"
    And I fill "Password" with "password123"
    And I fill "Password confirmation" with "password123"
    And I click "Sign up"
    And I should see message "Welcome! You have signed up successfully."
