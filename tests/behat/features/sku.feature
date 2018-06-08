@api @content @sku
Feature: Sku Bundle Requirements

  Background:
    Given "sku" content:
      | title              | field_upc    | field_stock_level | field_sale_price    | field_base_price    | field_tax_code    | status | moderation_state |
      | Sku Test Content   | Sku Test UPC | 10                | Sku Test Sale Price | Sku Test Base Price | Sku Test Tax Code | 1      | published        |

  Scenario: Sku content type has necessary field settings.
    Given the "sku" content type exists
    And the field "title" is present for the "sku" content type
    And the field "field_upc" is present for the "sku" content type
    And the field "field_stock_level" is present for the "sku" content type
    And the field "field_sale_price" is present for the "sku" content type
    And the field "field_base_price" is present for the "sku" content type
    And the field "field_online" is present for the "sku" content type
    And the field "field_visible" is present for the "sku" content type
    And the field "field_searchable" is present for the "sku" content type
    And the field "field_tax_code" is present for the "sku" content type
    And the "title" field should be required for "sku" content
    And the "field_upc" field should be required for "sku" content
    And the "field_stock_level" field should be required for "sku" content
    And the "field_sale_price" field should be required for "sku" content
    And the "field_base_price" field should be required for "sku" content
    And the "field_tax_code" field should be required for "sku" content

  Scenario: Roles have needed permissions to act on sku content.
    Given that only the following roles have content permissions for the "sku" content type:
      | role         | permission |
      | sku_creator  | create     |
      | sku_reviewer | edit own   |
      | sku_reviewer | edit any   |

  Scenario: Roles do not have permissions to act on sku content.
    Given the following roles do not have content permissions for the "sku" content type:
      | role         | permission |
      | sku_reviewer | delete     |
      | sku_reviewer | delete own |

  Scenario: Confirm access to published sku content as Anonymous
    Given I visit the last created content
    Then I should see "Sku Test Content"
    And I should not see "Access Denied"

  Scenario: Confirm access to published sku content as Authenticated User
    Given I am logged in as a user with the "authenticated" role
    Then I visit the last created content
    Then I should see "Sku Test Content"
    And I should not see "Access Denied"

  Scenario: Confirm no access to unpublished sku content as Anonymous
    Given "sku" content:
      | title                          | field_upc    | field_stock_level | field_sale_price    | field_base_price    | field_tax_code    | status | moderation_state |
      | Sku Test Content Unpublished   | Sku Test UPC | 10                | Sku Test Sale Price | Sku Test Base Price | Sku Test Tax Code | 0      | draft            |
    Then I visit the last created content
    Then I should not see "Sku Test Content Unpublished"
    And I should see "Access Denied"

  Scenario: Confirm no access to unpublished sku content as Authenticated
    Given "sku" content:
      | title                          | field_upc    | field_stock_level | field_sale_price    | field_base_price    | field_tax_code    | status | moderation_state |
      | Sku Test Content Unpublished   | Sku Test UPC | 10                | Sku Test Sale Price | Sku Test Base Price | Sku Test Tax Code | 0      | draft            |
    And I am logged in as a user with the "authenticated" role
    Then I visit the last created content
    Then I should not see "Sku Test Content Unpublished"
    And I should see "Access Denied"