Feature: Naukri Login

    Scenario Outline: Successful login with valid credentials
        Given user is on the Naukri login page
        When user logs in with "<username>" and "<password>"
        Then user should see "<result>"

        Examples:
            | username    | password        | result    |
            | VALID_USER  | VALID_PASSWORD  | success   |
            |  VALID_USER | 8149@Ni         | failure   |

    