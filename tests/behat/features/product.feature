@api
Feature: Product Bundle Requirements

  Background:
    Given a "brand" term with the name "BrandName"
    Given "product" content:
      | title                | field_title   | field_product_code | body                | field_ecommerce_description | field_brand | field_minimum_order | status | moderation_state |
      | Product Test Content | Product Title | Product Code       | Product Description | E-Commerce Description      | BrandName   | 1                   | 1      | published        |

  @content @product
  Scenario: Product content type has necessary field settings.
    Given the "product" content type exists
    Then the field "title" is present for the "product" content type
    And the field "field_title" is present for the "product" content type
    And the field "field_product_code" is present for the "product" content type
    And the field "body" is present for the "product" content type
    And the field "field_ecommerce_description" is present for the "product" content type
    And the field "field_parts" is present for the "product" content type
    And the field "field_cross_sells" is present for the "product" content type
    And the field "field_up_sells" is present for the "product" content type
    And the field "field_related_documents" is present for the "product" content type
    And the field "field_store_visible" is present for the "product" content type
    And the field "field_brand" is present for the "product" content type
    And the field "field_minimum_order" is present for the "product" content type
    And the field "field_shippable" is present for the "product" content type
    And the "title" field should be required for "product" content
    And the "field_product_code" field should be required for "product" content
    And the "body" field should be required for "product" content
    And the "field_ecommerce_description" field should be required for "product" content
    And the "field_parts" field should be required for "product" content
    And the "field_cross_sells" field should be required for "product" content
    And the "field_up_sells" field should be required for "product" content
    And the "field_brand" field should be required for "product" content
    And the "field_minimum_order" field should be required for "product" content

  @product @role
  Scenario: Roles have needed permissions to act on product content.
    Given that only the following roles have content permissions for the "product" content type:
      | role             | permission |
      | product_reviewer | create     |
      | product_reviewer | edit own   |
      | product_reviewer | edit any   |

  @product @role
  Scenario: Roles do not have permissions to act on product content.
    Given the following roles do not have content permissions for the "product" content type:
      | role             | permission |
      | product_reviewer | delete     |
      | product_reviewer | delete own |

  @product @role
  Scenario: Confirm access to published content as Anonymous
    Given I visit the last created content
    Then I should see "Product Test Content"
    And I should not see "Access Denied"

  @product @role
  Scenario: Confirm access to published content as Authenticated User
    Given I am logged in as a user with the "authenticated" role
    Then I visit the last created content
    Then I should see "Product Test Content"
    And I should not see "Access Denied"

  @product @role
  Scenario: Confirm no access to unpublished product content as Anonymous
    Given "product" content:
      | title                            | field_title   | field_product_code | body                | field_ecommerce_description | field_brand | field_minimum_order | status | moderation_state |
      | Product Test Content Unpublished | Product Title | Product Code       | Product Description | E-Commerce Description      | BrandName   | 1                   | 0      | draft            |
    Then I visit the last created content
    Then I should not see "Unpublished Content"
    And I should see "Access Denied"

  @product @role
  Scenario: Confirm no access to unpublished product content as Authenticated
    Given "product" content:
      | title                            | field_title   | field_product_code | body                | field_ecommerce_description | field_brand | field_minimum_order | status | moderation_state |
      | Product Test Content Unpublished | Product Title | Product Code       | Product Description | E-Commerce Description      | BrandName   | 1                   | 0      | draft            |
    And I am logged in as a user with the "authenticated" role
    Then I visit the last created content
    Then I should not see "Unpublished Content"
    And I should see "Access Denied"
