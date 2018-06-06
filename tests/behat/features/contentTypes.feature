@api
Feature: Content Types

  @product
  Scenario: Verify that a Product content type is present.
    Given I am logged in as a user with the administrator role
    When I visit "/node/add"
    Then I should see "Product"

  @product @fields
  Scenario: Ensure that the fields are present for Product content type.
    Given I am logged in as a user with the administrator role
    When I visit "node/add/product"
    Then I should see a "Title" element
    Then I should see a "#edit-title-0-value[class*='required']" element
    And  I should see a "#edit-field-title-0-value[class*='required']" element
    And  I should see a "#edit-field-product-code-0-value[class*='required']" element
    And  I should see a "#edit-body-0-value[class*='required']" element
    And  I should see a "#edit-field-ecommerce-description-0-value[class*='required']" element
    And  I should see a "#edit-field-store-visible-value" element
    And  I should see a "#edit-field-minimum-order-0-value[class*='required']" element
    And  I should see a "#edit-field-shippable-value" element

  @product @role
  Scenario: Ensure roles on this bundle.
    Given I am logged in as a user with the administrator role
    When I visit "admin/people/roles"
    Then I should see "Product reviewer"

  @product @permissions
  Scenario: Ensure permissions on this bundle.
    Given I am logged in as a user with the administrator role
    When I visit "admin/people/permissions/product_reviewer"
    Then the "product_reviewer[create product content]" checkbox should be checked
    Then the "product_reviewer[edit any product content]" checkbox should be checked
    Then the "product_reviewer[edit own product content]" checkbox should be checked
