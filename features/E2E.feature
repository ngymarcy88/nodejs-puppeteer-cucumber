Feature: E2E testing with cucumber

  Scenario: Login to outlook.com
    Given Go to page "https://outlook.live.com/owa/?nlp=1"
    When Fill the email with "puppheteerws@outlook.com"
    Then Click the next button
    When fill the password with "Wspuppheteer123"
    Then Click on Next
    And Click on Yes

  Scenario: Send email
    Given Send email form "https://outlook.live.com/mail/0/deeplink/compose"
    When Type "ngy.marcy1@gmail.com" to the form
    Then Type random subject
    And Press Control+Enter to send

  Scenario: Check send emails
    Given Sent emails url "https://outlook.live.com/mail/0/sentitems"
    When Click on the last sent email
    Then The subject should be 'random string'

  Scenario: Delete send emails
    Given Im at sent emails url "https://outlook.live.com/mail/0/sentitems"
    When Click on Delete all
    Then Confirm it