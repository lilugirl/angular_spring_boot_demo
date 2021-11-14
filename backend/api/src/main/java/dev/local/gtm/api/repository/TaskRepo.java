package dev.local.gtm.api.repository;

import dev.local.gtm.api.domain.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface TaskRepo extends MongoRepository<Task, String> {

}
