# A bit more CSharp and SQL

1. What does ***inheritance*** accomplish for us in C#?
<!-- enter you answer in the space below -->
```

```

2. How does ***member inheritance*** work in C#? Does a `Class` inherit all members of the base `Class`?
<!-- enter you answer in the space below -->
```

```

3. How does ***accessibility*** affect inheritance?
<!-- enter you answer in the space below -->
```

```

4. What is the difference between a `PRIMARY KEY` and a `FOREIGN KEY`
<!-- enter you answer in the space below -->
```

```

5. What is an ***alias***?
<!-- enter you answer in the space below -->
```

```

6. Demonstrate how you would query a join statement that would get all of a doctors patients from the following collections:

```SQL
CREATE TABLE doctors (
  id INT NOT NULL AUTO_INCREMENT,
  -- CODE OMITTED
  PRIMARY KEY (id)
)

CREATE TABLE patients (
  id INT NOT NULL AUTO_INCREMENT,
  -- CODE OMITTED
  PRIMARY KEY (id)
)

CREATE TABLE doctors (
  id INT NOT NULL AUTO_INCREMENT,
  doctorId INT NOT NULL,
  patientId INT NOT NULL,

  FOREIGN KEY (doctorId)
    REFERENCES doctors(id),
  FOREIGN KEY (patientId)
    REFERENCES patients(id),
)

```

<!-- enter you answer in the space below -->
```

```