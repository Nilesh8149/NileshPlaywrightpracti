@dashboard
Feature: Naukri Profile Update

    Background: User is logged in
        Given user is on the Naukri login page
        When user logs in with valid credentials

    Scenario: Update profile name from homepage
        And user should be on the homepage
        And user clicks on the View profile button
        And user clicks on the Edit button
        And user deletes the existing name
        And user adds the name "Nilesh Adole" again
        Then user should save the updated name