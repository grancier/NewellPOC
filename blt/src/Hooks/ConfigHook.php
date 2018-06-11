<?php

namespace Acquia\Blt\Custom\Hooks;

use Acquia\Blt\Robo\BltTasks;
use Consolidation\AnnotatedCommand\CommandData;
use Acquia\Blt\Robo\Exceptions\BltException;

/**
 * This class defines configuration hooks.
 */
class ConfigHook extends BltTasks {

  /**
   * This will be called after the `drupal:config:import` command is executed.
   *
   * @hook post-command drupal:config:import
   */
  public function postConfigImport($result, CommandData $commandData) {
    if ($this->input()->hasArgument('environment')) {
      $environment = $this->input()->getArgument('environment');
    }
    elseif ($this->getConfig()->has('environment')) {
      $environment = $this->getConfigValue('environment');
    }
    elseif (!empty($_ENV['environment'])) {
      $environment = $_ENV['environment'];
    }

    if (!empty($environment)) {
      $task = $this->taskDrush()->drush('config-split:import')->arg($environment);

      $result = $task->run();
      if (!$result->wasSuccessful()) {
        throw new BltException("Failed to import split configuration!");
      }
    }
    else {
      $this->say("Environment is unset. Skipping config split import...");
    }
  }

}
