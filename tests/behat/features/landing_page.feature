@api @content @landing_page
Feature: Landing Page Bundle Requirements

  Background:
    Given "landing_page" content:
      | title                     | body                       | status | moderation_state |
      | Landing Page Test Content | Content for a landing page | 1      | published        |

  @content @landing_page
  Scenario: Landing Page content type has necessary field settings.
    Given the "landing_page" content type exists
    Then the field "body" is present for the "landing_page" content type
    And the field "title" is present for the "landing_page" content type
    And the field "field_meta_tags" is present for the "landing_page" content type
    And the "title" field should be required for "landing_page" content

  @landing_page @role
  Scenario: Roles have needed permissions to act on landing page content.
    Given that only the following roles have content permissions for the "landing_page" content type:
      | role                  | permission |
      | landing_page_creator  | create     |
      | landing_page_creator  | edit own   |
      | landing_page_reviewer | edit any   |

  @landing_page @role
  Scenario: Roles do not have permissions to act on page content.
    Given the following roles do not have content permissions for the "landing_page" content type:
      | role                  | permission |
      | landing_page_creator  | delete     |
      | landing_page_creator  | delete own |
      | landing_page_reviewer | delete     |
      | landing_page_reviewer | delete own |

  @landing_page @role
  Scenario: Confirm access to published content as Anonymous
    Given I visit the last created content
    Then I should see "Landing Page Test Content"
    And I should not see "Access Denied"

  @landing_page @role
  Scenario: Confirm access to published content as Authenticated User
    Given I am logged in as a user with the "authenticated" role
    Then I visit the last created content
    Then I should see "Landing Page Test Content"
    And I should not see "Access Denied"

  @landing_page @role
  Scenario: Confirm no access to unpublished content as Anonymous
    Given "landing_page" content:
      | title               | body                       | status | moderation_state |
      | Unpublished Content | Content for a landing page | 0      | draft            |
    Then I should not see "Unpublished Content"
    And I should see "Access Denied"

  @landing_page @role
  Scenario: Confirm no access to unpublished content as Authenticated
    Given "landing_page" content:
      | title               | body                       | status | moderation_state |
      | Unpublished Content | Content for a landing page | 0      | draft            |
    And I am logged in as a user with the "authenticated" role
    Then I visit the last created content
    Then I should not see "Unpublished Content"
    And I should see "Access Denied"
