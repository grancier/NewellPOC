<?php

namespace Drupal;

use Drupal\DrupalExtension\Context\RawDrupalContext;
use Behat\Behat\Context\SnippetAcceptingContext;
use Drupal\node\Entity\NodeType;
use Drupal\media\Entity\MediaType;
use Drupal\paragraphs\Entity\ParagraphsType;
use Drupal\block_content\Entity\BlockContentType;
use PHPUnit_Framework_Assert;
use Drupal\user\Entity\Role;
use Behat\Gherkin\Node\TableNode;

/**
 * FeatureContext class defines custom step definitions for Behat.
 */
class FeatureContext extends RawDrupalContext implements SnippetAcceptingContext {

  /**
   * Every scenario gets its own context instance.
   *
   * You can also pass arbitrary arguments to the
   * context constructor through behat.yml.
   */
  public function __construct() {

  }

  /**
   * @Given the :arg1 content type exists
   *
   * @throws \Exception;
   */
  public function contentTypeExists($string) {
    $node_type = NodeType::load($string);
    if (empty($node_type)) {
      throw new \Exception('Content type ' . $string . ' does not exist.');
    }
  }

  /**
   * @Given the :arg1 media type exists
   *
   * @throws \Exception;
   */
  public function mediaTypeExists($string) {
    $media_type = MediaType::load($string);
    if (empty($media_type)) {
      throw new \Exception('Media type ' . $string . ' does not exist.');
    }
  }

  /**
   * @Given the :arg1 paragraph type exists
   *
   * @throws \Exception;
   */
  public function paragraphTypeExists($string) {
    $paragraph_type =  ParagraphsType::load($string);
    if (empty($paragraph_type)) {
      throw new \Exception('Paragraph type ' . $string . ' does not exist.');
    }
  }

  /**
   * @Given the :arg1 block type exists
   *
   * @throws \Exception;
   */
  public function blockTypeExists($string) {
    $block_type =  BlockContentType::load($string);
    if (empty($block_type)) {
      throw new \Exception('Block type ' . $string . ' does not exist.');
    }
  }

  /**
   * @Then the field :arg1 is present for the :arg2 content type
   */
  public function isNodeField($field_name, $node_type) {
    $this->isField($field_name, 'node', $node_type);
  }

  /**
   * @Then the field :arg1 is present on the :arg2 paragraph
   */
  public function isParagraphField($field_name, $paragraph_type) {
    $this->isField($field_name, 'paragraph', $paragraph_type);
  }

  /**
   * @Then the field :arg1 is present on the :arg2 media
   */
  public function isMediaField($field_name, $media_type) {
    $this->isField($field_name, 'media', $media_type);
  }

  /**
   * @Then the field :arg1 is present for the :arg2 block type
   */
  public function isBlockField($field_name, $block_type) {
    $this->isField($field_name, 'block_content', $block_type);
  }

  /**
   * @Then the :arg1 field should be required for :arg2 content
   */
  public function checkIsRequiredField($field_name, $node_type) {
    $this->isRequiredField($field_name, 'node', $node_type);
  }

  /**
   * @Then the :arg1 field should not be required for :arg2 content
   */
  public function checkIsNotRequiredField($field_name, $node_type) {
    $this->isNotRequiredField($field_name, 'node', $node_type);
  }

  /**
   * @Then the field :arg1 should be required for the :arg2 paragraph
   */
  public function paragraphIsRequiredField($field_name, $paragraph_type) {
    $this->isRequiredField($field_name, 'paragraph', $paragraph_type);
  }

  /**
   * @Then the field :arg1 should not be required for the :arg2 paragraph
   */
  public function paragraphIsNotRequiredField($field_name, $paragraph_type) {
    $this->isNotRequiredField($field_name, 'paragraph', $paragraph_type);
  }

  /**
   * @Then the field :arg1 should be required for :arg2 media
   */
  public function mediaIsRequiredField($field_name, $type) {
    $this->isRequiredField($field_name, 'media', $type);
  }

  /**
   * @Then the field :arg1 should not be required for :arg2 media
   */
  public function mediaIsNotRequiredField($field_name, $type) {
    $this->isNotRequiredField($field_name, 'media', $type);
  }

  /**
   * @Then the field :arg1 should be required for the :arg2 block type
   */
  public function blockIsRequiredField($field_name, $paragraph_type) {
    $this->isRequiredField($field_name, 'block_content', $paragraph_type);
  }

  /**
   * @Then the field :arg1 should not be required for the :arg2 block type
   */
  public function blockIsNotRequiredField($field_name, $paragraph_type) {
    $this->isRequiredField($field_name, 'block_content', $paragraph_type);
  }

  /**
   * @Then the :arg1 field on :arg2 content should allow references to :arg3 content/vocabulary (terms)
   */
  public function checkFieldAllowsEntityReferences($field_name, $node_type, $reference_bundles) {
    $reference_bundles = explode(',', $reference_bundles);
    $this->fieldAllowsEntityReferences($field_name, 'node', $node_type, $reference_bundles);
  }

  /**
   * @Then the :arg1 field on :arg2 content should allow references to :arg3 media
   */
  public function checkMediaFieldAllowsEntityReferences($field_name, $node_type, $reference_bundles) {
    $reference_bundles = explode(',', $reference_bundles);
    $this->fieldAllowsEntityReferences($field_name, 'node', $node_type, $reference_bundles);
  }

  /**
   * @Then the :arg1 field on :arg2 content should allow references to :arg3 paragraphs
   */
  public function checkFieldParagraphAllowsEntityReferences($field_name, $node_type, $reference_bundles) {
    $reference_bundles = explode(',', $reference_bundles);
    $this->fieldAllowsEntityReferences($field_name, 'node', $node_type, $reference_bundles);
  }

  /**
   * @Then the :arg1 field on :arg2 media should allow references to :arg3
   */
  public function mediaCheckFieldAllowsEntityReferences($field_name, $media_type, $reference_bundles) {
    $reference_bundles = explode(',', $reference_bundles);
    $this->fieldAllowsEntityReferences($field_name, 'media', $media_type, $reference_bundles);
  }

  /**
   * @Then the :arg1 field on :arg2 blocks should allow references to :arg3 content/vocabulary (terms)
   */
  public function blockCheckFieldAllowsEntityReferences($field_name, $block_type, $reference_bundles) {
    $reference_bundles = explode(',', $reference_bundles);
    $this->fieldAllowsEntityReferences($field_name, 'block_content', $block_type, $reference_bundles);
  }

  /**
   * @Then the :arg1 field on :arg2 blocks should allow references to :arg3 paragraphs
   */
  public function blockCheckFieldAllowsParagraphReferences($field_name, $paragraph_type, $reference_bundles) {
    $reference_bundles = explode(',', $reference_bundles);
    $this->fieldAllowsEntityReferences($field_name, 'block_content', $paragraph_type, $reference_bundles);
  }

  /**
   * @Then :arg1 has permission to :arg2
   */
  public function checkRolePermissions($role, $permission) {
    $this->roleHasPermission($role, $permission);
  }

  /**
   * @Then :arg1 does not have permission to :arg2
   */
  public function checkRoleDoesNotHavePermission($role, $permission) {
    $this->roleDoesNotHavePermission($role, $permission);
  }

  /**
   * @Given the following roles have the following permissions:
   */
  public function rolePermissions($node_type, TableNode $rolesTable) {
    foreach ($rolesTable as $rolePermission) {
      $role = $rolePermission['role'];
      $permission = $rolePermission['permission'];
      $this->roleHasPermission($role, $permission);
    }
  }

  /**
   * @Given the following roles do not have the following permissions:
   */
  public function roleNoPermissions($node_type, TableNode $rolesTable) {
    foreach ($rolesTable as $rolePermission) {
      $role = $rolePermission['role'];
      $permission = $rolePermission['permission'];
      $this->roleDoesNotHavePermission($role, $permission);
    }
  }

  /**
   * @Given that only the following roles have content permissions for the :arg1 content type:
   */
  public function roleOnlyContentPermissions($node_type, TableNode $rolesTable) {
    $allowed_roles = array();
    foreach ($rolesTable as $rolePermission) {
      $role = $rolePermission['role'];
      $permission = $rolePermission['permission'] . ' ' . $node_type . ' content';
      $this->roleHasPermission($role, $permission);
      $allowed_roles[] = $role;
    }
    $allowed_roles[] = 'administrator';

    $all_roles = $this->getRoles();
    foreach ($all_roles as $role) {
      if (!in_array($role, $allowed_roles)) {
        $this->roleDoesNotHavePermission($role, $permission);
      }
    }
  }

  /**
   * @Given that only the following roles have revision permissions for the :arg1 content type:
   */
  public function roleOnlyRevisionPermissions($node_type, TableNode $rolesTable) {
    $allowed_roles = array();
    foreach ($rolesTable as $rolePermission) {
      $role = $rolePermission['role'];
      $permission = $rolePermission['permission'] . ' ' . $node_type . ' revisions';
      $this->roleHasPermission($role, $permission);
      $allowed_roles[] = $role;
    }
    $allowed_roles[] = 'administrator';

    $all_roles = $this->getRoles();
    foreach ($all_roles as $role) {
      if (!in_array($role, $allowed_roles)) {
        $this->roleDoesNotHavePermission($role, $permission);
      }
    }
  }

  /**
   * @Given the following roles do not have content permissions for the :arg1 content type:
   */
  public function roleContentNotPermissions($node_type, TableNode $rolesTable) {
    foreach ($rolesTable as $rolePermission) {
      $role = $rolePermission['role'];
      $permission = $rolePermission['permission'] . ' ' . $node_type . ' content';
      $this->roleDoesNotHavePermission($role, $permission);
    }
  }

  /**
   * @Given the following roles have these permissions:
   */
  public function roleUserPermissions(TableNode $rolesTable) {
    foreach ($rolesTable as $rolePermission) {
      $role = $rolePermission['role'];
      $permission = $rolePermission['permission'];
      $this->roleHasPermission($role, $permission);
    }
  }

  /**
   * @Given the following roles do not have these permissions:
   */
  public function roleUserPermissionsNot(TableNode $rolesTable) {
    foreach ($rolesTable as $rolePermission) {
      $role = $rolePermission['role'];
      $permission = $rolePermission['permission'];
      $this->roleDoesNotHavePermission($role, $permission);
    }
  }

  /**
   * @Given I crash
   */
  public function iCrash() {
    try_to_call_this_non_existing_function();
  }

  /**
   * @Then I try to delete this content
   *
   * Query the node by title and redirect.
   */
  public function iTryToDeleteLatestContent() {
    $nid = $this->getLastCreatedNodeId();
    $this->getSession()->visit($this->locatePath('node/' . $nid . '/delete'));
  }

  /**
   * @Then I try to edit the last created content
   *
   */
  public function iTryToEditLatestContent() {
    $nid = $this->getLastCreatedNodeId();
    $this->getSession()->visit($this->locatePath('node/' . $nid . '/edit'));
  }

  /**
   * @Then I visit the last created content
   *
   * Query the node by title and visit it.
   */
  public function iVisitLatestContent() {
    $nid = $this->getLastCreatedNodeId();
    $this->getSession()->visit($this->locatePath('node/' . $nid));
  }


  /**
   * Users with the $role should have the $permission.
   */
  public function roleHasPermission($role, $permission) {
    $roleObj = Role::load($role);
    PHPUnit_Framework_Assert::assertNotEmpty($roleObj->hasPermission($permission), $role . ' role does not have permission to ' . $permission);
  }

  /**
   * Users with the $role should not have the $permission.
   */
  public function roleDoesNotHavePermission($role, $permission) {
    $roleObj = Role::load($role);
    PHPUnit_Framework_Assert::assertEmpty($roleObj->hasPermission($permission), $role . ' role has permission to ' . $permission . ', but should not.');
  }

  /**
   * The $field_name field should be present on $entity entities of $type $bundle.
   */
  public function isField($field_name, $entity, $bundle) {
    $bundle_fields = \Drupal::getContainer()->get('entity_field.manager')->getFieldDefinitions($entity, $bundle);
    if (empty($bundle_fields[$field_name])) {
      PHPUnit_Framework_Assert::assertEmpty($bundle_fields, $field_name . ' is not present on the ' . $entity . " " . $bundle);
    }
  }

  /**
   * The $field_name field should be required for $entity entities of $type bundle.
   */
  public function isRequiredField($field_name, $entity, $bundle) {
    $bundle_fields = \Drupal::getContainer()->get('entity_field.manager')->getFieldDefinitions($entity, $bundle);
    $field_definition = $bundle_fields[$field_name];
    $setting = $field_definition->isRequired();
    PHPUnit_Framework_Assert::assertNotEmpty($setting, 'Field ' . $field_name . ' is not required.');
  }

  /**
   * The $field_name field should not be required for $entity entities of $type bundle.
   */
  public function isNotRequiredField($field_name, $entity, $bundle) {
    $bundle_fields = \Drupal::getContainer()->get('entity_field.manager')->getFieldDefinitions($entity, $bundle);
    $field_definition = $bundle_fields[$field_name];
    $setting = $field_definition->isRequired();
    PHPUnit_Framework_Assert::assertEmpty($setting, 'Field ' . $field_name . ' is required.');
  }

  /**
   * The $field_name field on $entity entities of $type bundle should allow refs to $reference_bundles.
   */
  public function fieldAllowsEntityReferences($field_name, $entity, $bundle, array $reference_bundles) {
    foreach ($reference_bundles as $reference_bundle) {
      $bundle_fields = \Drupal::getContainer()->get('entity_field.manager')->getFieldDefinitions($entity, $bundle);
      $field_definition = $bundle_fields[$field_name];
      $settings = $field_definition->getSettings();
      if ($settings['handler_settings']['target_bundles']) {
        $target_bundles = $settings['handler_settings']['target_bundles'];
      }
      else if ($settings['handler_settings']['target_bundles_drag_drop']) {
        $target_bundles = $settings['handler_settings']['target_bundles_drag_drop'];
        foreach ($target_bundles as $key=>$bundle) {
          $target_bundles[$key] = $key;
        }
      }
      else {
        return false;
      }
      PHPUnit_Framework_Assert::assertContains(trim($reference_bundle), $target_bundles, $field_name . ' does not allow references to ' . trim($reference_bundle) . ' content');
    }
  }

  /**
   * Get all user roles.
   */
  public function getRoles() {
    $roles = user_roles();
    $roles = array_keys($roles);
    return $roles;
  }

  /**
   * Get most recent node id.
   *
   */
  public static function getLastCreatedNodeId() {
    $query = \Drupal::database()->select('node_field_data', 'nfd');
    $query->addField('nfd', 'nid');
    $query->range(0, 1);
    $query->orderBy("nid", 'DESC');
    $nid = $query->execute()->fetchField();

    return $nid;
  }


}
