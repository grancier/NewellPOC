@api @content @pages
Feature: Basic Page Bundle Requirements

  Background:
    Given "page" content:
      | title                     | body                                | status | moderation_state |
      | Basic Page Test Content   | Content for a basic page            | 1      | published        |

  Scenario: Basic Page content type has necessary field settings.
    Given the "page" content type exists
    Then the field "body" is present for the "page" content type
    And the field "title" is present for the "page" content type
    And the field "field_meta_tags" is present for the "page" content type
    And the "title" field should be required for "page" content

  Scenario: Roles have needed permissions to act on page content.
    Given that only the following roles have content permissions for the "page" content type:
      | role                   | permission |
      | page_creator           | create     |
      | page_creator           | edit own   |
      | page_reviewer		   | edit any   |

  Scenario: Roles do not have permissions to act on page content.
    Given the following roles do not have content permissions for the "page" content type:
      | role                  | permission |
      | page_creator	      | delete     |
      | page_creator	      | delete own |
      | page_reviewer		  | delete     |
      | page_reviewer		  | delete     |

  Scenario: Confirm access to published content as Anonymous
    Given I visit the last created content
    Then I should see "Basic Page Test Content"
    And I should not see "Access Denied"

  Scenario: Confirm access to published content as Authenticated User
    Given I am logged in as a user with the "authenticated" role
    Then I visit the last created content
    Then I should see "Basic Page Test Content"
    And I should not see "Access Denied"

  Scenario: Confirm no access to unpublished content as Anonymous
    Given "page" content:
      | title                     | body                                | status | moderation_state |
      | Unpublished Content       | Content for a basic page            | 0      | draft        |
    Then I should not see "Unpublished Content"
    And I should see "Access Denied"

  Scenario: Confirm no access to unpublished content as Authenticated
    Given "page" content:
      | title                     | body                                | status | moderation_state |
      | Unpublished Content       | Content for a basic page            | 0      | draft        |
    And I am logged in as a user with the "authenticated" role
    Then I visit the last created content
    Then I should not see "Unpublished Content"
    And I should see "Access Denied"